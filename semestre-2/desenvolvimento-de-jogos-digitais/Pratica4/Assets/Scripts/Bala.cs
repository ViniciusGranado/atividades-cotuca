using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bala : MonoBehaviour
{
    public float velocidade = 2f;
    public Vector2 direcao;
    public float tempoDeVida = 3f;

    public Color corInicial = Color.white;
    public Color corFinal;
    private SpriteRenderer _srBala;
    private float _tempoInicial;

    private void Awake()
    {
        _srBala = GetComponent<SpriteRenderer>();
    }

    void Start()
    {
        _tempoInicial = Time.time;
        Destroy(this.gameObject, tempoDeVida);
    }

    void Update()
    {
        Vector2 movimento = direcao.normalized * velocidade * Time.deltaTime;
        transform.Translate( movimento);

        float _tempoDecorrido = Time.time - _tempoInicial;
        float _porcentagemCompleta = _tempoDecorrido / tempoDeVida;
        _srBala.color = Color.Lerp(corInicial, corFinal, _porcentagemCompleta);
    }
}
