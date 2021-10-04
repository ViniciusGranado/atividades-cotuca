using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bala : MonoBehaviour
{
    public float velocidade = 2f;
    public Vector2 direcao;
    public float tempoDeVida = 3f;

    // Start is called before the first frame update
    void Start()
    {
        Destroy(this.gameObject, tempoDeVida);
    }

    // Update is called once per frame
    void Update()
    {
        Vector2 movimento = direcao.normalized * velocidade * Time.deltaTime;
        transform.Translate(movimento);
    }
}
