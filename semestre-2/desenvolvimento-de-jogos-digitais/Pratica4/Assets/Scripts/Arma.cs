using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Arma : MonoBehaviour
{
    public GameObject prefabBala;
    public GameObject atirador;
    private Transform _pontoDeTiro;

    private void Awake()
    {
        _pontoDeTiro = transform.Find("PontoDeTiro");
    }

    public void Atirar()
    {
        if (prefabBala != null && _pontoDeTiro != null && atirador != null)
        {
            GameObject minhaBala = Instantiate(prefabBala, _pontoDeTiro.position, 
                                               Quaternion.identity) as GameObject;
            Bala balaScript = minhaBala.GetComponent<Bala>();
            if (atirador.transform.localScale.x < 0f)
                balaScript.direcao = Vector2.left;
            else
                balaScript.direcao = Vector2.right;
        }
    }

    void Start()
    {
      // Atirar(); 
    }

    void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            Atirar();
        }

        if (Input.GetButtonDown("Fire2"))
        {
            Invoke("Atirar", 0.2f);
            Invoke("Atirar", 0.4f);
            Invoke("Atirar", 0.6f);
        }
    }
}
