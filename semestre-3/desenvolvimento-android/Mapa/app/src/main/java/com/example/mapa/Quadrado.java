package com.example.mapa;


import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.View;

public class Quadrado extends View {

    private final float x;
    private final float y;
    private final float z;
    private final float r;

    private final Paint mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);

    public Quadrado(Context context, float x, float y, float z, float r, int color) {
        super(context);
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        //define a cor
        mPaint.setColor(color); //cor
    }
    @Override
    protected void onDraw(Canvas canvas){
        super.onDraw(canvas);
        //desenha
        canvas.drawRect(x,y,z,r,mPaint);
    }
}
