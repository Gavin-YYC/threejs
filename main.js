// 一、设置渲染器
var renderer;
function initThree() {
  var container = document.querySelector('#container');
  width = container.clientWidth;
  height = container.clientHeight;

  // 生成渲染对象
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize( width, height );
  container.appendChild( renderer.domElement );

  console.log( renderer );
  renderer.setClearColor(0xFFFFFF, 1.0);
}


// 二、设置摄像机
var camera;
function initCamera() {
  // 设置透视投影的相机，默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里
  camera = new THREE.PerspectiveCamera( 45, width / height, 1, 5000 );
  // 设置相机的位置
  camera.position.x = 0;
  camera.position.y = 50;
  camera.position.z = 100;

  camera.up.x = 0; // 设置相机的上为X周方向
  camera.up.y = 0; // 设置相机的上为Y轴方向
  camera.up.z = 0; // 设置相机的上为Z轴方向

  camera.lookAt( {x: 0, y: 0, z: 0} );  // 设置视野的中心坐标
}


// 三、设置场景
var scene;
function initScene() {
  scene = new THREE.Scene();
}


// 四、设置光源
var light;
function initLight() {
  // 设置平行光源
  light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
  // 设置光源向量
  light.position.set( 200, 200, 200 );
  // 追加光源到场景
  scene.add( light );
}


// 五、设置物体
var sphere;
function initSphere() {
  sphere = new THREE.Mesh(
    new THREE.SphereGeometry( 20, 20 ), // 宽、高、深度
    new THREE.MeshLambertMaterial({color: 0xff0000}) // 设定材质
  );
  // 物体添加到场景
  scene.add( sphere );
  // 设置物体的位置
  sphere.position.set( 0, 0, 0 );
}


// 主函数
function init () {
  initThree();
  initCamera();
  initScene();
  initLight();
  initSphere();

  renderer.clear();
  renderer.render( scene, camera );
}

init()
