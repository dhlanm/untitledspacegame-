#pragma strict

var mainCam : GameObject;

function Start () {
	mainCam = GameObject.FindWithTag("MainCamera");
}

function Update () {

}

function OnMouseDown () {
    GetComponent(Renderer).material.color = Color.red;
	mainCam.GetComponent(Transform).position = Vector3(20,0,-10);
}
