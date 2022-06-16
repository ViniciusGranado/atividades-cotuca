package com.example.mapa;


import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.View;

public class Linha extends View {

    private final float startX;
    private final float startY;
    private final float stopX;
    private final float stopY;
    private final Paint mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);


    public Linha(Context context, float startX, float startY, float stopX, float stopY, int color) {
        super(context);
        this.startX = startX;
        this.startY = startY;
        this.stopX = stopX;
        this.stopY = stopY;

        //define a cor
        mPaint.setColor(color); //cor
    }
    @Override
    protected void onDraw(Canvas canvas){
        super.onDraw(canvas);
        //desenha
        canvas.drawLine(startX, startY, stopX, stopY, mPaint);
    }
}
