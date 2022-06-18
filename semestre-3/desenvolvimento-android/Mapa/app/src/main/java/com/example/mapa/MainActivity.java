package com.example.mapa;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.graphics.Paint;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    private FrameLayout main;
    private Button btnMudaCor;
    private Button btnSelecionaBola;
    private Button btnSelecionaQuadrado;
    private Button btnSelecionaOval;
    private Button btnSelecionaLinha;
    private Button btnDeletaBola;
    private Button btnDeletaQuadrado;
    private Button btnDeletaOval;
    private Button btnDeletaLinha;
    private Figura figuraSelecionada = Figura.BOLA;
    private int corSelecionada = getRandomColor();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnMudaCor = (Button)findViewById(R.id.btnMudaCor);
        btnSelecionaBola = (Button)findViewById(R.id.btnSelecionaBola);
        btnSelecionaQuadrado = (Button)findViewById(R.id.btnSelecionaQuadrado);
        btnSelecionaOval = (Button)findViewById(R.id.btnSelecionaOval);
        btnSelecionaLinha = (Button)findViewById(R.id.btnSelecionaLinha);
        btnDeletaBola = (Button)findViewById(R.id.btnDeletaBola);
        btnDeletaQuadrado = (Button)findViewById(R.id.btnDeletaQuadrado);
        btnDeletaOval = (Button)findViewById(R.id.btnDeletaOval);
        btnDeletaLinha = (Button)findViewById(R.id.btnDeletaLinha);
        //obter o id da view
        main = (FrameLayout) findViewById(R.id.main_view);

        btnSelecionaBola.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                figuraSelecionada = Figura.BOLA;
            }
        });

        btnSelecionaQuadrado.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                figuraSelecionada = Figura.QUADRADO;
            }
        });

        btnSelecionaOval.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                figuraSelecionada = Figura.OVAL;
            }
        });

        btnSelecionaLinha.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                figuraSelecionada = Figura.LINHA;
            }
        });

        btnDeletaBola.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                for (int i=main.getChildCount();i>=0;i--){
                    View vi= main.getChildAt(i);
                    if (vi instanceof Bola){
                        main.removeViewAt(i);
                    }
                }
            }
        });

        btnDeletaQuadrado.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                for (int i=main.getChildCount();i>=0;i--){
                    View vi= main.getChildAt(i);
                    if (vi instanceof Quadrado){
                        main.removeViewAt(i);
                    }
                }
            }
        });

        btnDeletaOval.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                for (int i=main.getChildCount();i>=0;i--){
                    View vi= main.getChildAt(i);
                    if (vi instanceof Oval){
                        main.removeViewAt(i);
                    }
                }
            }
        });

        btnDeletaLinha.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                for (int i=main.getChildCount();i>=0;i--){
                    View vi= main.getChildAt(i);
                    if (vi instanceof Linha){
                        main.removeViewAt(i);
                    }
                }
            }
        });

        btnMudaCor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                corSelecionada = getRandomColor();
            }
        });
    }

    @Override
    public boolean onTouchEvent(MotionEvent event){
        switch (event.getAction()){
            case MotionEvent.ACTION_DOWN:
                event.getX();
                switch (figuraSelecionada) {
                    case BOLA:
                        main.addView(criarBola(event));
                        return true;
                    case QUADRADO:
                        main.addView(criarQuadrado(event));
                        return true;
                    case OVAL:
                        main.addView(criarOval(event));
                        return true;
                    case LINHA:
                        main.addView(criarLinha(event));
                        return true;
                }
                return true;
            case MotionEvent.ACTION_MOVE:
                return true;
        }
        return true;
    }

    public Bola criarBola(MotionEvent event) {
        return new Bola(this, event.getX(), event.getY() - 500, 40, corSelecionada);
    }

    public Quadrado criarQuadrado(MotionEvent event) {
        return new Quadrado(this, event.getX(), event.getY() - 500, event.getX() + 100, event.getY() - 400, corSelecionada);
    }

    public Oval criarOval(MotionEvent event) {
        return new Oval(this, event.getX() - 100, event.getY() - 500, event.getX() + 50, event.getY() + 100, corSelecionada);
    }

    public Linha criarLinha(MotionEvent event) {
        return new Linha(this, event.getX(), event.getY() - 500, event.getX(), event.getY(), corSelecionada);
    }

    public int getRandomColor(){
        Random rnd = new Random();
        return Color.argb(255, rnd.nextInt(256), rnd.nextInt(256), rnd.nextInt(256));
    }
}