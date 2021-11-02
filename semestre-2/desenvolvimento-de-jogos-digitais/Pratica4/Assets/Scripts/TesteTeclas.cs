using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TesteTeclas : MonoBehaviour
{
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Debug.Log("Botão esquerdo do mouse foi pressionado!");
        }

        if (Input.GetMouseButton(0))
        {
            Debug.Log("Botão esquerdo do mouse mantido pressionado!");
        }

        if (Input.GetMouseButtonUp(0))
        {
            Debug.Log("Botão esquerdo do mouse foi liberado!");
        }

        if (Input.GetButtonDown("Jump"))
        {
            Debug.Log("Play pula com jump!");
            this.transform.Translate(new Vector2(0, 0.25f));
        }

        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        if (horizontal != 0f)
        {
            Debug.Log($"Eixo horizontal = {horizontal}");
        }

        if (vertical != 0f)
        {
            Debug.Log($"Eixo vertical = {vertical}");
        }
    }
}
