#pragma strict

@script RequireComponent (Rigidbody)

class P1Motor extends MovementMotor {

	public var runningSpeed : float = 5.0;
	public var runningSnappyness : float = 50;
	public var turningSmoothing : float = 0.3;

	function Start () {
		movementDirection = Vector3(1,0,0);
	}
	
	function Update () {
			var targetVelocity : Vector3 = movementDirection * runningSpeed;
			var deltaVelocity : Vector3 = targetVelocity - rigidbody.velocity;
			if (rigidbody.useGravity)
				deltaVelocity.y = 0;
			rigidbody.AddForce (deltaVelocity * runningSnappyness, ForceMode.Acceleration);
			
			// Setup player to face facingDirection, or if that is zero, then the movementDirection
			var faceDir : Vector3 = facingDirection;
			if (faceDir == Vector3.zero)
				faceDir = movementDirection;
			
			// Make the character rotate towards the target rotation
			if (faceDir == Vector3.zero) {
				rigidbody.angularVelocity = Vector3.zero;
			}
			else {
				var rotationAngle : float = AngleAroundAxis (transform.forward, faceDir, Vector3.up);
				rigidbody.angularVelocity = (Vector3.up * rotationAngle * turningSmoothing);
			}
	}
	
	// The angle between dirA and dirB around axis
	static function AngleAroundAxis (dirA : Vector3, dirB : Vector3, axis : Vector3) {
	    // Project A and B onto the plane orthogonal target axis
	    dirA = dirA - Vector3.Project (dirA, axis);
	    dirB = dirB - Vector3.Project (dirB, axis);
	   
	    // Find (positive) angle between A and B
	    var angle : float = Vector3.Angle (dirA, dirB);
	   
	    // Return angle multiplied with 1 or -1
	    return angle * (Vector3.Dot (axis, Vector3.Cross (dirA, dirB)) < 0 ? -1 : 1);
	}

}