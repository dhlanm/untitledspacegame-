#pragma strict

function Start () {

}



function Update () {
	transform.RotateAround(Vector3.zero, Vector3.forward, 5 * Time.deltaTime);
}
