using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PatrulhaDoOponente : MonoBehaviour
{

    public float velocidade = 1f;
    public float minX, maxX;
    public float tempoDeEspera = 2f;
    private GameObject _meta;

    private Animator _animador;
    private Arma _arma;

  private void Awake()
  {
    _animador = GetComponent<Animator>();
    _arma = GetComponentInChildren<Arma>();
  }

  void AtualizarMeta()
    {
        if (_meta == null)
        {
            _meta = new GameObject("Alvo");
            _meta.transform.position = new Vector2(minX, transform.position.y);
            return;
        }

        if (_meta.transform.position.x <= minX)
        {
            _meta.transform.position = new Vector2(maxX, transform.position.y);
            transform.localScale = new Vector3(1, 1, 1);
        }

        else
            if (_meta.transform.position.x >= maxX)
            {
                _meta.transform.position = new Vector2(minX, transform.position.y);
                transform.localScale = new Vector3(-1, 1, 1);
            }
    }
    void Start()
    {
        AtualizarMeta();
        StartCoroutine("PatrulhaAteMeta");
    }

    IEnumerator PatrulhaAteMeta()
    {
        while (Vector2.Distance(transform.position, _meta.transform.position) > 0.05f)
        {
            _animador.SetBool("Idle", false);
            Vector2 direcao = _meta.transform.position - transform.position;
            float direcaoX = direcao.x;
            transform.Translate(direcao.normalized * velocidade * Time.deltaTime);

            yield return null;
        }

        transform.position = new Vector2(_meta.transform.position.x, transform.position.y);
        AtualizarMeta();

        _animador.SetBool("Idle", true);
        _animador.SetTrigger("Shooting");
        yield return new WaitForSeconds(tempoDeEspera);

        StartCoroutine("PatrulhaAteMeta");
    }

    void PodeAtirar()
    {
      if (_arma != null)
      {
        _arma.Atirar();
      }
    }
}
