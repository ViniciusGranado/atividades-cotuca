using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeColor : MonoBehaviour
{
    public Color[] cores;
    private int qualCor = 0;
    private SpriteRenderer srObjeto;

    void Awake()
    {
        Debug.Log("Estou associado a um objeto da tela atual!"); 
        srObjeto = this.GetComponent<SpriteRenderer>();
    }

    void Start()
    {
        Debug.Log("O jogador acabou de pressionar o botão PLAY.");
    }

    void Update()
    {
        if (srObjeto != null)
        {
            if (Input.GetKeyDown(KeyCode.R))
            {
                srObjeto.color = Color.red;
            }

            if (Input.GetKeyDown(KeyCode.G))
            {
                srObjeto.color = Color.green;
            }

            if (Input.GetKeyDown(KeyCode.Y))
            {
                srObjeto.color = Color.yellow;
            }

            if (Input.GetKeyDown(KeyCode.C))
            {
                srObjeto.color = Color.cyan;
            }

            if (Input.GetKeyUp(KeyCode.Space))
            {
                srObjeto.color = cores[qualCor];

                if (++qualCor >= cores.Length)
                {
                    qualCor = 0;
                } 
            }
        }
    }
}
