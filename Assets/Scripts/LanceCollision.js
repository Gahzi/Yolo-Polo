#pragma strict

public var hingeComponent : HingeJoint;

function Start () {
	
}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
    
    
     if(collision.gameObject.tag == "Lance")
    {
        if(hingeComponent != null) {
        	Destroy(hingeComponent);
        }

    }
    
    /*
    // Debug-draw all contact points and normals
    for (var contact : ContactPoint in collision.contacts) {
        Debug.DrawRay(contact.point, contact.normal, Color.white);
        // Play a sound if the coliding objects had a big impact.        
    //if (collision.relativeVelocity.magnitude > 2)
        //audio.Play();
    }
    */
}
    