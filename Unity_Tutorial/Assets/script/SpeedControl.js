#pragma strict

var speedText : GameObject;

function Start () {
	speedText = GameObject.Find("SpeedControl");
}



function Update () {

	if(Input.GetKeyDown(KeyCode.R))
    {
        if(Time.timeScale < 5)
	        Time.timeScale = 1 + Time.timeScale;	
	    speedText.GetComponent(TextMesh).text = Time.timeScale+'';	
    }
    else if(Input.GetKeyDown(KeyCode.T))
    {
        if(Time.timeScale > 1)
	        Time.timeScale = Time.timeScale - 1;
	    speedText.GetComponent(TextMesh).text = Time.timeScale+'';

    }
}
