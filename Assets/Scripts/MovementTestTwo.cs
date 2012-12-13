using UnityEngine;
using System.Collections;

public class MovementTestTwo : MonoBehaviour {
    public float speed = 10.0F;
    public float rotationSpeed = 100.0F;
	public GameObject name = null;
    public GameObject pivot = null;
	void Update() {
        float rotation = Input.GetAxis("Player Two Vertical") * rotationSpeed;
        rotation *= Time.deltaTime;
        name.transform.RotateAround(pivot.transform.position,Vector3.forward,rotation);
    }
}