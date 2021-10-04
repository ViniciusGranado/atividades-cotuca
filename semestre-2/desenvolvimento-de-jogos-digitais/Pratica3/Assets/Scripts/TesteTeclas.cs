using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TesteTeclas : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Debug.Log("Botão esquerdo do mouse foi pressionado sobre o Player!");
        }
        if (Input.GetMouseButton(0))
        {
            Debug.Log("Botão esquerdo do mouse foi mantido pressionado sobre o Player!");
        }
        if (Input.GetMouseButtonUp(0))
        {
            Debug.Log("Botão esquerdo do mouse foi liberado sobre o Player!");
        }
        if (Input.GetKeyDown(KeyCode.Space)) {
            Debug.Log("Player pula!");
        }
        if (Input.GetButtonDown("Jump")) {
            Debug.Log("Player pulou com jump!");
        }

        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        if (horizontal != 0f)
        {
            Debug.Log($"Eixo horizontal = {horizontal}");
        };
        if (vertical != 0f)
        {
            Debug.Log($"Eixo vertical = {vertical}");
        };
    }
}
