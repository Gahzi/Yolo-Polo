#pragma strict

public var hingeComponent : HingeJoint;

function Start () {
	
}

function Update () {

}

function OnCollisionEnter(collision : Collision) {

		/*
    	Debug.Log("Collision Found!");
    	
    	Debug.Log("collision.tag = " + collision.gameObject.tag.ToString());
    	Debug.Log("this.tag = " + this.gameObject.tag.ToString());
    	*/
     if(collision.gameObject.tag == "PlayerTwoLance" && this.gameObject.tag == "PlayerOneHitbox") {
        if(hingeComponent != null) {
        	Destroy(hingeComponent);
        }
        
        var JangleP1Scripts : JavaJanglePlayerOne[] = FindObjectsOfType(JavaJanglePlayerOne) as JavaJanglePlayerOne[];
    	for (var script : JavaJanglePlayerOne in JangleP1Scripts) {
        Destroy(script);
    	}
    	
    	var JangleP2Scripts : JavaJanglePlayerTwo[] = FindObjectsOfType(JavaJanglePlayerTwo) as JavaJanglePlayerTwo[];
    	for (var script : JavaJanglePlayerTwo in JangleP2Scripts) {
        Destroy(script);
    	}
    	
    	var P1MotorScripts : P1Motor[] = FindObjectsOfType(P1Motor) as P1Motor[];
    	for (var script : P1Motor in P1MotorScripts) {
        Destroy(script);
    	}
    	
    	var P2MotorScripts : P2Motor[] = FindObjectsOfType(P2Motor) as P2Motor[];
    	for (var script : P2Motor in P2MotorScripts) {
        Destroy(script);
    	}
        
        Debug.Log("Player Two Wins!");
     }
     
     if(collision.gameObject.tag == "PlayerOneLance" && this.gameObject.tag == "PlayerTwoHitbox") {
        if(hingeComponent != null) {
        	Destroy(hingeComponent);
        }
        
        var GangleP1Scripts : JavaJanglePlayerOne[] = FindObjectsOfType(JavaJanglePlayerOne) as JavaJanglePlayerOne[];
    	for (var script : JavaJanglePlayerOne in GangleP1Scripts) {
        Destroy(script);
    	}
    	
    	var GangleP2Scripts : JavaJanglePlayerTwo[] = FindObjectsOfType(JavaJanglePlayerTwo) as JavaJanglePlayerTwo[];
    	for (var script : JavaJanglePlayerTwo in GangleP2Scripts) {
        Destroy(script);
    	}
    	
    	var M1MotorScripts : P1Motor[] = FindObjectsOfType(P1Motor) as P1Motor[];
    	for (var script : P1Motor in M1MotorScripts) {
        Destroy(script);
    	}
    	
    	var M2MotorScripts : P2Motor[] = FindObjectsOfType(P2Motor) as P2Motor[];
    	for (var script : P2Motor in M2MotorScripts) {
        Destroy(script);
    	}
        
        Debug.Log("Player One Wins!");
     }
}
    