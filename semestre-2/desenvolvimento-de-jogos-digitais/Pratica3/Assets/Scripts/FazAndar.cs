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

    // Update is called once per frame
    void Update()
    {
        float x = Input.GetAxis("Horizontal");
        float y = Input.GetAxis("Vertical");

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

        Vector2 movimento = new Vector2(x, y) * Time.deltaTime;
        transform.Translate(movimento);
    }
}
