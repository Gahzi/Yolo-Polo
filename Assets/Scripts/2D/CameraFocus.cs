using UnityEngine;
using System.Collections;

// Ensure there is a CameraScrolling script attached to the same GameObject, as this script relies on it.
[RequireComponent (typeof (CameraScrolling))]

public class CameraFocus : MonoBehaviour {
// Script that puts a window on-screen where the player can toggle who he controls
// It works by sending SetControllable messages to turn the different characters on and off.
// It also changes who the CameraScrolling scripts looks at.
	
	// An internal reference to the attached CameraScrolling script
	private CameraScrolling cameraScrolling;
	
	// List of objects to control
	public Transform[] targets;
	
	// What to display on the buttons in the window
	public string[] targetButtonNames;
	
	
	// On start up, we send the SetControllable () message to turn the different players on and off.
	void  Awake (){
	
		// Get the reference to our CameraScrolling script attached to this camera;
		cameraScrolling = GetComponent<CameraScrolling>();
		
		// Set the scrolling camera's target to be our character at the start.
		cameraScrolling.SetTarget (targets[0], true);
		
		// tell all targets (except the first one) to switch off.
		for (int i=0; i < targets.Length; i++) 
			targets[i].gameObject.SendMessage ("SetControllable", (i == 0), SendMessageOptions.DontRequireReceiver);
	}


}