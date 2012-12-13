using UnityEngine;
using System.Collections;

public class MovementTestOne : MonoBehaviour {
    public float speed = 10.0F;
    public float rotationSpeed = 100.0F;
	public GameObject name = null;
    public GameObject pivot = null;
	void Update() {
        float translation = Input.GetAxis("Keyboard Horizontal") * speed;
        float rotation = Input.GetAxis("Keyboard Vertical") * rotationSpeed;
        translation *= Time.deltaTime;
        rotation *= Time.deltaTime;
        transform.Translate(0, 0, translation);
        name.transform.RotateAround(pivot.transform.position,Vector3.forward,rotation);
    }
}