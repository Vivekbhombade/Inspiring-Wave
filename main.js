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
camera.position.z = 15; // Set camera position

// Add Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 20); // Soft ambient light
scene.add(ambientLight);

// Add Directional Light (for shadows and highlights)
const directionalLight = new THREE.DirectionalLight(0xffffff, 20);
directionalLight.position.set(500, 500, 500);
scene.add(directionalLight);

// Load 3D Model
let model;
let mixer;
const loader = new GLTFLoader();
loader.load(
    'chaman_ti-pche_3_animations.glb', // Ensure the path is correct
    function (gltf) {
        model = gltf.scene;

        // Scale and position the model
        model.scale.set(1, 4, 3);
        model.position.set(1, -5, 0); 
        model.rotation.y= 1;

        // Add the model to the scene
        scene.add(model);

        // Log model object for debugging
        console.log('3D Model loaded successfully:', model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
        console.log(gltf.animations);
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

// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// on hover property

// Re-rendering loop
const reRenderer3D = () => {
    requestAnimationFrame(reRenderer3D);
    
    // Add animations or any necessary updates here
  

    renderer.render(scene, camera);
    mixer.update(0.01);
};
reRenderer3D();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
