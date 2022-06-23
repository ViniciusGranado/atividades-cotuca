package com.example.listview1;

import android.content.DialogInterface;
import android.graphics.Bitmap;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

public class MainActivity extends AppCompatActivity {

    private Button btn;
    private InputStreamReader corpoReader;
    private List<String> listaNomes;
    private String nomeCompleto;
    private String idAluno;
    private String linkById = "https://ds302.herokuapp.com/url?id=";

    private ListView lista;
    private ArrayAdapter<String> listaAdapter2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btn = (Button) findViewById(R.id.button);
        lista = (ListView) findViewById(R.id.lvAlunos);

        btn.setOnClickListener(v -> {

            AsyncTask.execute(new Runnable() {
                @Override
                public void run() {
                    try {

                        URL githubEndpoint = new URL("https://ds302.herokuapp.com/url");
                        HttpsURLConnection conexao= (HttpsURLConnection) githubEndpoint.openConnection();

                        if (conexao.getResponseCode() == 200){
                            InputStream corpo = conexao.getInputStream();

                            corpoReader= new InputStreamReader(corpo, "UTF-8");
                            new carregaImg().execute();

                        }else{
                            Log.e("RESPONSE", "Erro ");
                        }
                        conexao.disconnect();
                    }
                    catch (Exception e){
                        Log.e("URL",e.getMessage());
                    }
                }
            });
        });
        lista.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String nome = listaNomes.get(position).toString();

                AsyncTask.execute(new Runnable() {
                    @Override
                    public void run() {
                        try {

                            URL githubEndpoint = new URL("https://ds302.herokuapp.com/url?id=" + nome);
                            HttpsURLConnection conexao= (HttpsURLConnection) githubEndpoint.openConnection();

                            if (conexao.getResponseCode() == 200){
                                InputStream corpo = conexao.getInputStream();

                                corpoReader= new InputStreamReader(corpo, "UTF-8");
                                new carregaDados().execute();

                            }else{
                                Log.e("RESPONSE", "Erro ");
                            }
                            conexao.disconnect();
                        }
                        catch (Exception e){
                            Log.e("URL",e.getMessage());
                        }
                    }
                });
            }
        });

    }

    public void showAlert(String msg){
        AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);

        builder.setTitle("Informações");
        builder.setMessage(msg);
        builder.setNeutralButton("FECHAR",
                (DialogInterface dialog, int which)->{;}
        );
        builder.show();
    }

    private class carregaImg extends AsyncTask<String, Void, Bitmap>{

        @Override
        protected Bitmap doInBackground(String... str) {
            // aqui desmontamos o json e podemos utiliza-lo
            Bitmap fig = null;
            JSONArray jObj = null;
            try {
                StringBuilder sb = new StringBuilder();
                for (int ch; (ch = corpoReader.read()) != -1; ) {
                    sb.append((char) ch);
                }
                Log.d("ddd",sb.toString());
                jObj = new JSONArray(sb.toString());

                listaNomes = new ArrayList<String>();


                for(int i = 0; i < jObj.length(); i++) {
                    JSONObject c = jObj.getJSONObject(i);

                    // Storing each json item in variable
                    String name = c.getString("firstname");
                    Log.d("nome",name);
                    listaNomes.add(name);
                }
            } catch (JSONException | IOException e) {
                Log.e("JSON Parser", "Error parsing data " + e.toString());
            }

            return fig;
        }
        @Override
        protected void onPostExecute(Bitmap result){
            listaAdapter2 = new ArrayAdapter<String>(
                    getApplicationContext(),
                    android.R.layout.simple_list_item_1,
                    listaNomes );
            lista.setAdapter(listaAdapter2);
        }
    }

    private class carregaDados extends AsyncTask<String, Void, Bitmap>{

        @Override
        protected Bitmap doInBackground(String... str) {
            // aqui desmontamos o json e podemos utiliza-lo
            Bitmap fig = null;
            JSONArray jObj = null;
            try {
                StringBuilder sb = new StringBuilder();
                for (int ch; (ch = corpoReader.read()) != -1; ) {
                    sb.append((char) ch);
                }
                Log.d("ddd",sb.toString());
                jObj = new JSONArray(sb.toString());

                for(int i = 0; i < jObj.length(); i++) {
                    JSONObject c = jObj.getJSONObject(i);

                    // Storing each json item in variable
                    String name = c.getString("firstname");
                    String lastname = c.getString("lastname");
                    String id = c.getString("id");
                    Log.d("nome",name);
                    Log.d("lastname", lastname);
                    Log.d("id", id);

                    nomeCompleto = name + " " + lastname;
                    idAluno = id;
                }
            } catch (JSONException | IOException e) {
                Log.e("JSON Parser", "Error parsing data " + e.toString());
            }

            return fig;
        }
        @Override
        protected void onPostExecute(Bitmap result){
            showAlert("Nome: " + nomeCompleto + "\nID: " + idAluno);
        }
    }
}



















