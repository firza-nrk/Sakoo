import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Stepper from "../component/Stepper";

const Checkup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    usia: "",
    pekerjaan: "",
    pendapatan: "",
    tanggungan: "",
    pengeluaran: "",
    kebutuhan_pokok: "",
    tempat_tinggal: "",
    transportasi: "",
    pendidikan: "",
    kesehatan: "",
    komunikasi: "",
    hiburan: "",
    donasi: "",
    tidak_terduga: "",
    lainnya: "",
    utang: "",
    tabungan: "",
    tujuan: "",
  });

  const pengeluaranFields = [
    "kebutuhan_pokok",
    "tempat_tinggal",
    "transportasi",
    "pendidikan",
    "kesehatan",
    "komunikasi",
    "hiburan",
    "donasi",
    "tidak_terduga",
    "lainnya",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Langsung update nilai apa adanya
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    // Kalkulasi total pengeluaran hanya jika field pengeluaran diubah
    if (pengeluaranFields.includes(name)) {
      let total = 0;
      pengeluaranFields.forEach((field) => {
        const fieldValue = updatedFormData[field] || "0";
        const numeric = parseInt(fieldValue.replace(/\D/g, ""), 10);
        total += isNaN(numeric) ? 0 : numeric;
      });
      updatedFormData.pengeluaran = total.toString();
    }

    setFormData(updatedFormData);
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const Input = ({ label, name, placeholder = "", prefix = "" }) => {
    const [inputValue, setInputValue] = useState(formData[name]);

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleBlur = () => {
      const numericValue = inputValue.replace(/\D/g, "");
      const updatedFormData = {
        ...formData,
        [name]: numericValue,
      };

      if (pengeluaranFields.includes(name)) {
        let total = 0;
        pengeluaranFields.forEach((field) => {
          const val = parseInt(
            field === name ? numericValue : formData[field] || 0,
            10
          );
          total += val;
        });
        updatedFormData.pengeluaran = total;
      }

      setFormData(updatedFormData);
      setInputValue(numericValue);
    };

    const isPengeluaran = name === "pengeluaran";

    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
        <div className="flex">
          {prefix && (
            <span
              className={`px-3 py-2 border border-r-0 rounded-l-md ${
                isPengeluaran
                  ? "bg-[#f1f1f1] text-[#204842] border-[#BBF49D]"
                  : "bg-gray-100"
              }`}
            >
              {prefix}
            </span>
          )}
          <input
            name={name}
            type="text"
            inputMode="numeric"
            className={`w-full px-3 py-2 border focus:outline-none focus:ring-2 ${
              prefix ? "rounded-r-md border-l-0" : "rounded-md"
            } ${
              isPengeluaran
                ? "bg-[#BBF49D] text-[#204842] border-[#BBF49D] focus:ring-[#BBF49D]"
                : "focus:ring-green-300"
            }`}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
    );
  };

  const Select = ({ label, name, value, onChange, options }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <option value="">
          Pilih yang paling sesuai dengan aktivitas utama kamu
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
          <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Data
            </h1>

            <Input
              label="Nama Lengkap"
              name="nama"
              placeholder="Nama kamu siapa?"
            />
            <Input label="Usia" name="usia" placeholder="Contoh: 25" />
            <Select
              label="Jenis Pekerjaan"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              options={[
                "Pegawai Negeri Sipil",
                "Pegawai Swasta",
                "Guru / Dosen",
                "Tenaga Kesehatan",
                "Pegawai Bank / Keuangan",
                "Karyawan Startup / IT",
                "Wirausaha / Pebisnis / Freelancer",
                "Petani / Nelayan",
                "Buruh / Pekerja Lepas",
                "Sopir",
                "Tukang / Teknisi",
                "Ibu Rumah Tangga",
                "Tidak Bekerja",
                "Pensiunan",
                "Mahasiswa",
                "Pelajar",
                "Lainnya",
              ]}
            />
            <Input
              label="Pendapatan bulanan"
              name="pendapatan"
              prefix="Rp "
              placeholder="Contoh: 3000000"
            />
            <Input
              label="Jumlah Tanggungan"
              name="tanggungan"
              placeholder="Contoh: 2 orang"
            />
          </>
        );
      case 2:
        return (
          <>
            <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Pengeluaran
            </h1>

            <Input
              label="Kebutuhan Pokok"
              name="kebutuhan_pokok"
              prefix="Rp "
              placeholder="Total untuk makan, minum, pakaian, kebutuhan dasar"
            />
            <Input
              label="Tempat Tinggal"
              name="tempat_tinggal"
              prefix="Rp "
              placeholder="Sewa rumah/kos, cicilan KPR, listrik, air"
            />
            <Input
              label="Transportasi"
              name="transportasi"
              prefix="Rp "
              placeholder="Biaya naik kendaraan umum/BBM/ojek online"
            />
            <Input
              label="Pendidikan"
              name="pendidikan"
              prefix="Rp "
              placeholder="Biaya sekolah/kuliah untuk diri sendiri atau keluarga"
            />
            <Input
              label="Kesehatan"
              name="kesehatan"
              prefix="Rp "
              placeholder="Biaya berobat, obat-obatan, asuransi kesehatan"
            />
            <Input
              label="Komunikasi & Internet"
              name="komunikasi"
              prefix="Rp "
              placeholder="Paket data, Wi-Fi bulanan, pulsa"
            />
            <Input
              label="Gaya Hidup & Hiburan"
              name="hiburan"
              prefix="Rp "
              placeholder="Nongkrong, belanja non-prioritas, streaming, nonton, dll"
            />
            <Input
              label="Sedekah & Donasi"
              name="donasi"
              prefix="Rp "
              placeholder="Zakat, infak, bantuan sosial"
            />
            <Input
              label="Pengeluaran Tidak Terduga"
              name="tidak_terduga"
              prefix="Rp "
              placeholder="Dana darurat, keperluan mendadak"
            />
            <Input
              label="Lainnya"
              name="lainnya"
              prefix="Rp "
              placeholder="Pengeluaran lain di luar kategori"
            />
            <Input
              label="Total Pengeluaran"
              name="pengeluaran"
              prefix="Rp "
              placeholder="Total Pengeluaran"
            />
          </>
        );

      case 3:
        return (
          <>
          <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Utang dan Cicilan
            </h1>

            <Input
              label="Cicilan utang bulan ini"
              name="cicilan"
              prefix="Rp "
              placeholder="Total cicilan aktif tiap bulan (KPR, motor, pinjol, dll.)"
            />
            <Input
              label="Total utang saat ini"
              name="utang"
              prefix="Rp "
              placeholder="Jumlah seluruh utang yang masih harus dibayar"
            />
          </>
        );
      case 4:
        return (
          <>
          <h1
              className="text-2xl font-bold mb-4 font-outfit"
              style={{ color: "#204842" }}
            >
              Simpanan
            </h1>
            <Input
              label="Total Tabungan"
              name="tabungan"
              prefix="Rp "
              placeholder="Saldo yang tersimpan di rekening tabungan"
            />
            <Input
              label="Investasi"
              name="investasi"
              prefix="Rp "
              placeholder="Total nilai dari reksadana, saham, emas, dll"
            />
            <Input
              label="Dana Darurat"
              name="Dana Darurat"
              prefix="Rp "
              placeholder="Uang yang kamu siapkan khusus untuk kondisi darurat"
            />
            <Input
              label="Total Aset"
              name="aset"
              prefix="Rp "
              placeholder="Nilai seluruh aset kamu: rumah, kendaraan, tabungan, investasi"
            />
          </>
        );
      case 5:
  return (
    <div className="space-y-6 font-outfit text-[#204842]">
      <div>
        <h1 className="font-semibold mb-2">Pilihan Perencanaan Keuangan</h1>
        <p className="text-sm text-gray-600 mb-2">
          Apa tujuan utama keuangan kamu? (pilih satu)
        </p>
        <div className="space-y-2">
          {[
            'Dana Darurat',
            'Dana Pendidikan Anak',
            'Dana Menikah',
            'Pembelian Rumah',
            'Kendaraan Pribadi',
            'Modal Usaha',
            'Ibadah Haji atau Umroh',
            'Liburan',
            'Dana Pensiun',
            'Warisan atau Wasiat',
            'Belum Punya Tujuan',
            'Lainnya'
          ].map((item, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="tujuanKeuangan"
                value={item}
                className="form-radio text-[#204842]"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      
      <div>
        <h2 className="font-semibold mb-2">Target Tahun dari Sekarang</h2>
        <div className="space-y-2">
          {[
            { label: 'Jangka pendek (<3 tahun)', value: 'pendek' },
            { label: 'Jangka menengah (4–5 tahun)', value: 'menengah' },
            { label: 'Jangka panjang (>5 tahun)', value: 'panjang' },
            { label: 'Tidak ada', value: 'tidakAda' }
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="targetTahun"
                value={value}
                className="form-radio text-[#204842]"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      
      <div>
        <h2 className="font-semibold mb-2">Dana Dari Simpanan Mana</h2>
        <div className="space-y-2">
          {['Tabungan', 'Aset', 'Investasi', 'Tidak ada', 'Lainnya'].map((item, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="sumberDana"
                value={item}
                className="form-radio text-[#204842]"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6fdf6] py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-center text-green-900 mb-2">
            Finansial check up
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Luangkan beberapa menit untuk mengetahui kesehatan keuangan mu.
            Dapatkan saran lalu ambil langkah baru menuju keuangan yang sehat.
          </p>
          <Stepper activeStep={step} />
          <div className="mt-6 min-h-[320px]">{renderForm()}</div>
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="bg-[#f1f8f4] text-gray-700 px-4 py-2 rounded-lg"
              >
                Sebelumnya
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={step === 5 ? () => alert("Data terkirim!") : nextStep}
              style={{ backgroundColor: "#BBF49D", color: "#204842" }}
              className="px-4 py-2 rounded-lg hover:brightness-90"
            >
              {step === 5 ? "Kirim" : "Selanjutnya"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkup;
