// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#82A1B1")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 8
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
     let width = window.innerWidth
     let height = window.innerHeight
     renderer.setSize( width, height )
     camera.aspect = width / height
     camera.updateProjectionMatrix()
 })

 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0x8C1842, flatShading: true, metalness: 0, roughness: 1 })
 var cube2 = new THREE.Mesh ( geometry, material )
 scene.add( cube2 )

 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0x8C1842, flatShading: true, metalness: 0, roughness: 1 })
 var cube3 = new THREE.Mesh ( geometry, material )
 scene.add( cube3 )

 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0x8C1842, flatShading: true, metalness: 0, roughness: 1 })
 var cube4 = new THREE.Mesh ( geometry, material )
 scene.add( cube4 )

 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0x8C1842, flatShading: true, metalness: 0, roughness: 1 })
 var cube5 = new THREE.Mesh ( geometry, material )
 scene.add( cube5 )
 

 // basic cube
 var geometry = new THREE.BoxGeometry( 3, 1, 2)
 var material = new THREE.MeshStandardMaterial( { color: 0xBFF00, flatShading: true, metalness: 0, roughness: 1 })
 var cube = new THREE.Mesh ( geometry, material )
 scene.add( cube )
 
 // wireframe cube
 var geometry = new THREE.BoxGeometry( 4, 4, 4)
 var material = new THREE.MeshBasicMaterial( {
     color: "#000000", wireframe: true, transparent: true
 })
 var wireframeCube = new THREE.Mesh ( geometry, material )
 scene.add( wireframeCube )
 
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
 scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
 pointLight.position.set( 25, 50, 25 );
 scene.add( pointLight );
 
 
 function animate() {
     requestAnimationFrame( animate )
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     cube2.translateX( 0.01 );
     cube2.rotation.x += -0.01;
     cube2.rotation.y += -0.01;
     cube3.translateX( -0.01 );
     cube3.rotation.x += -0.01;
     cube3.rotation.y += -0.01;
     cube4.translateY( 0.01 );
     cube4.rotation.x += -0.01;
     cube4.rotation.y += -0.01;
     cube5.translateY( -0.01 );
     cube5.rotation.x += -0.01;
     cube5.rotation.y += -0.01;
     wireframeCube.rotation.x = 0.01;
     wireframeCube.rotation.y -= 0.01;
     renderer.render( scene, camera )
 }
 animate()