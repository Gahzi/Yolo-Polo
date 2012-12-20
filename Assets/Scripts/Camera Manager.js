//#pragma strict

var cam1: Camera;
var cam2: Camera;
var cam3: Camera;
var player: GameObject;
var target: GameObject;

function Start() {
    cam1.enabled = true;
    cam2.enabled = true;
    cam3.enabled = false;
}

function Update() {

	if(target.transform.position.x < 3.825){ //< (Screen.width / 16)){
	
	cam1.enabled = false;
	cam2.enabled = false;
	cam3.enabled = true;
	
	}
/*
    if (Input.GetKeyDown(KeyCode.V) && (cam1.enabled == true || cam3.enabled == true)) {
    cam1.enabled = false;
    cam2.enabled = true;
    cam3.enabled = false;
    }
    else if (Input.GetKeyDown(KeyCode.B) && (cam2.enabled == true || cam1.enabled == true)) {
    cam1.enabled = false;
    cam2.enabled = false;
    cam3.enabled = true;
    }
    else if (Input.GetKeyDown(KeyCode.C) && (cam2.enabled == true || cam3.enabled == true)) {
    cam1.enabled = true;
    cam2.enabled = false;
    cam3.enabled = false;
    }
    */
}