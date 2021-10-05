using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Arma : MonoBehaviour
{
    public GameObject prefabBala;
    public GameObject atirador;
    private Transform _pontoDeTiro;

    void Awake()
    {
        _pontoDeTiro = transform.Find("PontoDeTiro");
    }

    void Start()
    {
    }

    void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            Atirar();
        }
    }

    void Atirar()
    {
        if (prefabBala != null && _pontoDeTiro != null && atirador != null)
        {
            GameObject minhaBala = Instantiate(prefabBala, _pontoDeTiro.position, Quaternion.identity) as GameObject;
            Bala balaComponente = minhaBala.GetComponent<Bala>();

            if (atirador.transform.localScale.x < 0f)
            {
                balaComponente.direcao = Vector2.left;
            }
            else
            {
                balaComponente.direcao = Vector2.right;
            }
        }
    }
}
