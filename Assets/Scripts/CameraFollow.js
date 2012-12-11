#pragma strict

var Player : GameObject;

function Start () {

}

function FixedUpdate () {
	// in this case I only needed to care about the height
	transform.position.x= Mathf.Lerp(transform.position.x, Player.transform.position.x - 18, Time.deltaTime); 
}