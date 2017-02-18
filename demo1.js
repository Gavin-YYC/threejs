
var renderer;
function initRenderer () {
  var container = document.querySelector('#container');
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize( 400, 400 );
  container.appendChild( renderer.domElement );
  renderer.setClearColor( 0x000000 );
}


var scene;
function initScene() {
  scene = new THREE.Scene();
}


var camera;
function initCamera_Ortho() {
  camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
  camera.position.set(25, 25, 25);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add( camera );
}


function initCamera_Pers() {
  camera = new THREE.PerspectiveCamera( 60, 400 / 400, 1, 10 );
  camera.position.set( 0, 0, 5 );
  scene.add( camera );
}

var cube;
function initCube() {

  /*
   * ------------------------------------
   * -            Geometry              -
   * ------------------------------------
   */

  // // 长方体
  // var object = new THREE.CubeGeometry( 4, 4, 4 );

  // // 平面
  // var object = new THREE.PlaneGeometry( 1, 2, 2, 2 );
  //
  // 球体 ( 半径， 经度上切片、维度上切片、经度开始的弧度、经度跨过的弧度、维度开始的弧度、维度跨过的弧度 )
  var object = new THREE.SphereGeometry( 3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2 );

  // // 圆形 ( 半径，分段，开始弧度、弧度跨国的弧度 )
  // var object = new THREE.CircleGeometry( 1, 10, Math.PI, Math.PI / 3 );
  //
  // // 圆柱体 ( 底部半径，底部半径，高度，半径分片，高度分片，是否没有顶面与底面 )
  // var object = new THREE.CylinderGeometry( 1, 1, 2, 20, 20, false );
  //
  // // 圆台
  // var object = new THREE.CylinderGeometry( 1, 1.2, 2, 20, 20, false );
  //
  // // 无顶面底面圆柱圆台
  // var object = new THREE.CylinderGeometry( 1, 1,2, 2, 20, 20, true );
  //
  // // 正四面体 ( 半径、detail )
  // var object = new THREE.TetrahedronGeometry( 1 );
  //
  // // 正八面体
  // var object = new THREE.OctahedronGeometry( 1 );
  //
  // // 正二十面体
  // var object = new THREE.IcosahedronGeometry( 1 );
  //
  // // 圆环面  ( 圆环半径，管道半径，圆环半径分片，管道半径分片，弧度 -- 默认Math.PI * 2 )
  // var object = new THREE.TorusGeometry( 1, 0.2, 10, 30, Math.PI / 2 );
  //
  // // 圆环结 ( 半径，管道半径，半径分片，管道半径分片，p, q, heightScale )
  // var object = new THREE.TorusKnotGeometry( 1, 0.2, 50, 10 );

  // 自定义形状
  var geometry = new THREE.Geometry();

  /*
   * ------------------------------------
   * -            Meterial              -
   * ------------------------------------
   */

  // 基本材质
  var meterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,  // 颜色
    opacity: 0.4,     // 透明度
    visible: true,    // 是否可见，默认为true
    side: THREE.BackSide,  // 渲染面为正面还是反面，默认是正面，反面为：THREE.BackSide，双面：THREE.DoubleSide
    wireframe: true,  // 是否渲染线，而非面，默认为false
    map: ''           // 使用纹理贴图
  });

  var meterial = new THREE.MeshLambertMaterial({
    color: 0xffff00,
    emissive: 0xff0000
  });

  cube = new THREE.Mesh( object, meterial );
  scene.add( cube );
}

var Light;
function initLight () {
  // 设置平行光源
  light = new THREE.PointLight(0xffffff, 1, 100);
  // 设置光源向量
  light.position.set(10, 15, 5);
  // 追加光源到场景
  scene.add( light );
}


function init () {
  initRenderer();
  initScene();
  initLight();
  initCamera_Ortho();
  // initCamera_Pers()
  initCube();
  renderer.clear();
  renderer.render( scene, camera );
}


init();
