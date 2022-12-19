import * as THREE from "three";
import {TextGeometry} from "TextGeometry";
import {FontLoader} from "FontLoader";
import {GLTFLoader} from "GLTFLoader";

var scene, camera, renderer

scene = new THREE.Scene()
const fov = 50
const aspect = window.innerWidth/window.innerHeight

renderer = new THREE.WebGLRenderer({antialiasing: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.append(renderer.domElement)

camera = new THREE.PerspectiveCamera(fov, aspect,1, 1000)
camera.position.set(7, 17, 70)
camera.lookAt(0,0,0)

const createLighting = ()=>{
    const pointLight = new THREE.PointLight("#FFFFFF", 1.5, 100)
    pointLight.position.set(0,0,0)
    pointLight.castShadow = true

    const spotLight = new THREE.SpotLight("#FFFFFF", 5, 50, Math.PI, 1)
    spotLight.position.set(0, 21, 10)
    spotLight.castShadow = true

    
    scene.add(spotLight)
    scene.add(pointLight)
}

const createSaturnBall = ()=>{
    const sphereGeometry = new THREE.SphereGeometry(2.3, 32, 32)
    const sphereTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const sphereBumpTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const sphereMaterial = new THREE.MeshPhongMaterial({
        shininess: 40,
        map: sphereTexture,
        bumpMap: sphereBumpTexture
    })
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphereMesh.position.set(15,5,10)
    sphereMesh.receiveShadow=true

    scene.add(sphereMesh)
}

const createSaturnRing = ()=>{
    const torusGeometry = new THREE.TorusGeometry(4, 0.5, 2.5, 100)
    const torusTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturnring.jpg")
    const torusMaterial = new THREE.MeshLambertMaterial({
        map: torusTexture
    })
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial)
    
    torusMesh.position.set(15,5,10)
    torusMesh.rotation.set(20,0,0)
    torusMesh.castShadow=true
    
    scene.add(torusMesh)
}

const createSun = ()=>{
    const sphereGeometry = new THREE.SphereGeometry(10, 32, 32)
    const sphereTexture = new THREE.TextureLoader().load("./assets/texture/sun/sun.jpg")
    const sphereMaterial = new THREE.MeshLambertMaterial({
        map: sphereTexture,
        opacity: 0.9,
        transparent: true
    })
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphereMesh.position.set(0,0,0)
    sphereMesh.receiveShadow=true
    
    scene.add(sphereMesh)
}

const createBigMeteor = ()=>{
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.5,0)
    const dodecahedronTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronBumpTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronMaterial = new THREE.MeshPhongMaterial({
        map: dodecahedronTexture,
        bumpMap: dodecahedronBumpTexture,
        shininess: 30,
        transparent: true,
    })
    const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial)
    dodecahedronMesh.position.set(-31,5,10)
    dodecahedronMesh.receiveShadow=true

    scene.add(dodecahedronMesh)
}

const createSmallMeteor1 = ()=>{
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5, 0)
    const dodecahedronTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronBumpTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronMaterial = new THREE.MeshPhongMaterial({
        map: dodecahedronTexture,
        bumpMap: dodecahedronBumpTexture,
        shininess: 30,
        transparent: true,
    })
    const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial)
    dodecahedronMesh.position.set(-31,8,10)
    dodecahedronMesh.receiveShadow=true

    scene.add(dodecahedronMesh)
}

const createSmallMeteor2 = ()=>{
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5, 0)
    const dodecahedronTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronBumpTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronMaterial = new THREE.MeshPhongMaterial({
        map: dodecahedronTexture,
        bumpMap: dodecahedronBumpTexture,
        shininess: 30,
        transparent: true,
    })
    const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial)
    dodecahedronMesh.position.set(-31,2,10)
    dodecahedronMesh.receiveShadow=true

    scene.add(dodecahedronMesh)
}

const createSmallMeteor3 = ()=>{
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5, 0)
    const dodecahedronTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronBumpTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronMaterial = new THREE.MeshPhongMaterial({
        map: dodecahedronTexture,
        bumpMap: dodecahedronBumpTexture,
        shininess: 30,
        transparent: true,
    })
    const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial)
    dodecahedronMesh.position.set(-27,7,10)
    dodecahedronMesh.receiveShadow=true

    scene.add(dodecahedronMesh)
}

const createSmallMeteor4 = ()=>{
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5, 0)
    const dodecahedronTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronBumpTexture = new THREE.TextureLoader().load("./assets/texture/saturn/saturn.jpg")
    const dodecahedronMaterial = new THREE.MeshPhongMaterial({
        map: dodecahedronTexture,
        bumpMap: dodecahedronBumpTexture,
        shininess: 30,
        transparent: true,
    })
    const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial)
    dodecahedronMesh.position.set(-28,5,10)
    dodecahedronMesh.receiveShadow=true

    scene.add(dodecahedronMesh)
}

const createText = ()=>{
    const loader = new FontLoader();
    loader.load("./node_modules/three/examples/fonts/gentilis_bold.typeface.json", function(font){
        const textGeometry = new TextGeometry('UFO',{
            font: font,
            size: 1,
            height:1,
        })
        const textMaterial = new THREE.MeshBasicMaterial({
            color: "#E2C886"
        })
        const textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.position.set(-1,18,0)

        scene.add(textMesh)
    })
}

const create3DModel =()=>{
    const loader = new GLTFLoader()
    loader.load("./assets/model/scene.gltf", function(gltf){
        gltf.scene.position.set(0,15,0)
        gltf.scene.scale.set(1,1,1)
        scene.add(gltf.scene)
    })
}

// Skybox Belum

const render = ()=>{
    requestAnimationFrame(render)
    renderer.shadowMap.enabled = true
    renderer.render(scene, camera)
}

window.onload = ()=>{
    createLighting()
    createSaturnBall()
    createSaturnRing()
    createSun()
    createBigMeteor()
    createSmallMeteor1()
    createSmallMeteor2()
    createSmallMeteor3()
    createSmallMeteor4()
    createText()
    create3DModel()
    render()
}