# Akhisar Taksi — 7/24 Güvenilir Ulaşım Web Sitesi

Akhisar / Manisa taksi hizmeti için modern, yüksek performanslı ve SEO uyumlu web sitesi.

- **Firma:** Akhisar Taksi
- **Telefon:** 0536 922 54 04
- **Adres:** Efendi Mah. 272. Sok. No:2 Akhisar/Manisa
- **Araç:** Dacia Sandero (1-4 Yolcu)

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak görüntüleyebilirsiniz.

## Prodüksiyon Derleme

```bash
npm run build
```

## Docker ile yayınlama

Uygulama statik Next.js çıktısını üretir ve Nginx container'ı üzerinden sunar.

```bash
docker compose up -d --build
docker compose ps
curl http://127.0.0.1:8081/healthz
```

Varsayılan port doluysa proje dizininde bir `.env` dosyası oluşturun:

```dotenv
APP_PORT=8085
```

Container portu güvenlik amacıyla yalnızca `127.0.0.1` adresine bağlanır. İnternet
trafiği host Nginx üzerinden aktarılmalıdır. Örnek ayar
[`deploy/nginx/host.conf.template`](deploy/nginx/host.conf.template) dosyasındadır.

### Ubuntu VPS kurulumu

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
git clone https://github.com/berkesongul/akhisartaksi.git ~/bayramtaksi
cd ~/bayramtaksi
docker compose up -d --build
```

Ardından host Nginx ayarını kurun. `DOMAIN` ve gerekiyorsa upstream portunu
değiştirin:

```bash
sudo cp deploy/nginx/host.conf.template /etc/nginx/sites-available/bayramtaksi
sudo nano /etc/nginx/sites-available/bayramtaksi
sudo ln -s /etc/nginx/sites-available/bayramtaksi /etc/nginx/sites-enabled/bayramtaksi
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d alanadiniz.com -d www.alanadiniz.com
```

### GitHub Actions ile otomatik dağıtım

`.github/workflows/deploy-vps.yml`, `main` dalına her gönderimde kaynak kodu
`~/bayramtaksi` dizinine aktarır ve container'ı yeniden oluşturur. Repository
Secrets altında şu değerler gereklidir:

- `VPS_IP`: sunucu IP adresi
- `VPS_USER`: SSH kullanıcısı
- `VPS_SSH_KEY`: kullanıcının private SSH anahtarı

Parola yerine yalnızca deploy için ayrılmış, yetkileri sınırlandırılmış bir SSH
anahtarı kullanılması önerilir.
