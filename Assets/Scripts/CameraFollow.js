#pragma strict

var Player : GameObject;

function Start () {

}

function Update () {
	// in this case I only needed to care about the height
	transform.position.x= Player.transform.position.x; 
}