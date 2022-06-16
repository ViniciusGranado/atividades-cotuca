package com.example.mapa;


import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.View;

public class Oval extends View {

    private final float left;
    private final float top;
    private final float right;
    private final float bottom;
    private final Paint mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);


    public Oval(Context context, float left, float top, float right, float bottom, int color ) {
        super(context);
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        //define a cor
        mPaint.setColor(color); //cor
    }
    @Override
    protected void onDraw(Canvas canvas){
        super.onDraw(canvas);
        //desenha
        canvas.drawOval(left, top, right, bottom, mPaint);
    }
}
