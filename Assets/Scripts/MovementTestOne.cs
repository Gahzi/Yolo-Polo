using UnityEngine;
using System.Collections;

public class MovementTestOne : MonoBehaviour {
    public float speed = 10.0F;
    public float rotationSpeed = 100.0F;
	public GameObject name = null;
    public GameObject pivot = null;
	public int burstProbabilityPercentage = 80;
	public int lengthOfFramesPerImpulseBurst = 15;
	//private int frameTimer = 0;
	//private float burstRotation = 0;
	
	void Update() {	
		//Debug.Log("Frame Timer: " + frameTimer.ToString());
        float rotation = Input.GetAxis("Player One Vertical") * rotationSpeed;
        rotation *= Time.deltaTime;
        name.transform.RotateAround(pivot.transform.position,Vector3.forward,rotation);
		
		/*
		if(Random.Range(0,100) > burstProbabilityPercentage && frameTimer <= 0) {
			Debug.Log("rotation Burst!");
			frameTimer = lengthOfFramesPerImpulseBurst;
			int nextAnglePush = -1; //Random.Range(-1,1);
			Debug.Log("rotation Burst Angle: " + nextAnglePush.ToString());
			burstRotation = nextAnglePush * rotationSpeed;
		}
		
		if(frameTimer <= lengthOfFramesPerImpulseBurst && frameTimer > 0) {
        	burstRotation *= Time.deltaTime;
        	name.transform.RotateAround(pivot.transform.position,Vector3.forward,burstRotation);
			frameTimer = frameTimer - 1;
		}
		*/
		/*
		 * // if we beat the probability, go up
		if(!(nextDirectionProb > impulseSameDirectionProbability)) {
			previousDirection = Vector3.forward ;
		}
		else {
			previousDirection = 0;	
		}
		 *
		 */ 
		
    }
}