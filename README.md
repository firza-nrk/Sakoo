# Sakoo-Machine Learning

Repository Machine Learning ini berisikan rangkaian proses dalam pengembangan model machine learning. 
Tahap yang dilakukan mencakup:

1. Clustering
2. Klasifikasi
3. Pengujian Model 
4. Pengujian hasil fine tuning model Gemini 2.0 flash lite di vertex ai

---

## Struktur File
```
Machine-Learning/
│
├── 1_clustering/
│ └── 01_clustering.ipynb
│
├── 2_klasifikasi/
│ ├── 02_klasifikasi.ipynb
│ ├── data_testing.csv
│ ├── model_sakoo_ann.h5
│ ├── model_sakoo_ann.keras
│ ├── model_sakoo_ann.tflite
│ └── preprocessing.pkl
│
├── 3_testing/
│ └── 03_testing.ipynb
│
├── 4_vertex.ai/
│ └── usage.json
│
└── README.md
```
---
## Deskripsi Setiap Tahap

### 1. Clustering
Pada tahap ini, tim Machine Learning melakukan eksperimen untuk memberi label pada setiap baris dataset berdasarkan perhitungan kesehatan keuangan.  
Pendekatan yang digunakan adalah **unsupervised learning** dengan algoritma **PCA** dan **K-Means**.

### 2. Klasifikasi
Setelah dataset dilabeli, tim mengembangkan model klasifikasi menggunakan algoritma **Artificial Neural Network (ANN)** untuk mengklasifikasikan setiap fiturnya.

### 3. Testing
Model yang telah dilatih diuji menggunakan dataset simulasi dan input dari pengguna untuk mengukur performa dan akurasi.

#### cara penggunaan

*environment yang digunakan*
``pip install tensorflow scikit-learn pandas numpy gdown``

model yang digunakan dalam testing ini adalah model_sakoo_ann.keras dan pre-processing untuk mengubah data mentah kedalam rasio

*menjalankan script*
``python 03_testing.ipynb``


### 4. Vertex AI
Folder ini berisi cara melakukan pemanggilan (API request) ke model **Gemini 2.0 Flash Lite** yang telah di-fine-tune dan dideploy menggunakan **Google Cloud Vertex AI**.

*environment yang digunakan*
``pip install google-cloud-aiplatform google-generativeai``

*pastikan sudah mendapatkan kredensial untuk memulai request ke Vertex AI*

``os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "xxxxx"``

*jalankan skrip*

``python 04_gemini_vertexai.ipynb``

*jangan lupa untuk mengganti variable text_user untuk pengujian
---

## Teknologi yang Digunakan

- Python
- TensorFlow & scikit-learn
- Pandas, NumPy, Matplotlib, Seaborn
- Google Cloud Vertex AI

---

## Kontributor

- Putri Pita Mutia  
- Mazdalifah Hanuranda  
- M. DzaFadhlan F. Muzakki 
