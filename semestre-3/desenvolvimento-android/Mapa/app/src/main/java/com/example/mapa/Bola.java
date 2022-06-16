package com.example.mapa;


import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.View;

public class Bola extends View {

    private final float x;
    private final float y;
    private final int r; //raio do circulo
    private final Paint mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);


    public Bola(Context context, float x, float y, int r, int color) {
        super(context);
        this.x = x;
        this.y = y;
        this.r = r;
        //define a cor
        mPaint.setColor(color); //cor
    }
    @Override
    protected void onDraw(Canvas canvas){
        super.onDraw(canvas);
        //desenha
        canvas.drawCircle(x,y,r,mPaint);
    }
}
