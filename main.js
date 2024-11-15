import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// Create Scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(
    75, // Field of view
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 15; // Initial camera position

// Add Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 10); // Soft ambient light
scene.add(ambientLight);

// Add Directional Light (for shadows and highlights)
const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
directionalLight.position.set(700, 500, 500);
scene.add(directionalLight);

// add here 3D Model
let model;
let mixer;
const loader = new GLTFLoader();
loader.load(
    'animated_flying_fluttering_butterfly_loop.glb', // Ensure the path is correct
    function (gltf) {
        model = gltf.scene;

        // Scale and position the model
        model.scale.set(80, 73, 84);
        model.position.set(1, -4, 0);
        model.rotation.y = 1;

        // Add the model to the scene
        scene.add(model);

        // Log model object for debugging
        console.log('3D Model loaded successfully:', model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
        console.log(gltf.animations);

        // Event listener for hover
        document.querySelectorAll('.nav a, .heading1, .heading2, .heading3, .heading4, .heading5').forEach(anchor => {
            anchor.addEventListener('mouseover', () => {
                changeModelColor();
            });
            anchor.addEventListener('mouseout', () => {
                resetModelColor();
            });
        });
    },
    function (xhr) {
        const loadProgress = (xhr.loaded / xhr.total) * 100;
        console.log(loadProgress + '% loaded');
        if (xhr.loaded === xhr.total) {
            console.log('Model fully loaded.');
        }
    },
    function (error) {
        console.error('Error loading model:', error);
    }
);

// Function to change model color randomly
function changeModelColor() {
    if (model) {
        model.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(Math.random() * 0xffffff);
            }
        });
    }
}

// Function to reset model color (optional)
function resetModelColor() {
    if (model) {
        model.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(0xffffff); // Set to original color
            }
        });
    }
}

// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// Scroll event for zoom-in and zoom-out effect
window.addEventListener('scroll', () => {
    // Adjust zoom based on scroll position
    // The `window.scrollY` represents the vertical scroll position
    camera.position.z = 15 - window.scrollY * 0.002;

    // Clamp camera position to a range to avoid excessive zooming
    camera.position.z = Math.max(5, Math.min(15, camera.position.z));
});

// Re-rendering loop
const reRenderer3D = () => {
    requestAnimationFrame(reRenderer3D);

    // Add animations or any necessary updates here
    if (mixer) mixer.update(0.01);

    renderer.render(scene, camera);
};
reRenderer3D();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
