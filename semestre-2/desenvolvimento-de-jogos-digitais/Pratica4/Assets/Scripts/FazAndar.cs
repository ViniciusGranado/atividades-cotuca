using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FazAndar : MonoBehaviour
{
    private SpriteRenderer personagemSpriteRenderer;
    void Awake()
    {
        personagemSpriteRenderer = GetComponent<SpriteRenderer>();
    }

    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        
        if (x < 0)
        {
           personagemSpriteRenderer.flipX = true;
        }
        else
        {
          if (x > 0)
          {
            personagemSpriteRenderer.flipX = false;
          }
        }

        float y= Input.GetAxis("Vertical");
        Vector2 movimento = new Vector2(x, y) * Time.deltaTime;
        transform.Translate(movimento);
    }
}
