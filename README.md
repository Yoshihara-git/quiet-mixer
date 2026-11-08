# Quiet Mixer

複数の音源（mp3 / mp4 / webm）を同時に、トラックごとの音量・再生範囲で流せるスマホ向け PWA です。
就寝時や作業時の環境音ミックスを想定しています。ファイルは端末の中だけで扱い、外部には送信しません。

## 動作環境

- Android の Chrome（ホーム画面に追加して使う）

## 開発

```bash
npm install      # 必要な部品を入れる（最初の 1 回）
npm run dev      # 開発サーバーを起動 → http://localhost:5173/
npm run build    # 型チェックして、公開用ファイルを dist/ に作る
npm run preview  # dist/ の中身を手元で確認する
```

## ドキュメント

- `docs/design.md` — デザインの決定
- `docs/architecture.md` — 設計判断の記録

## 開発の進め方

作業ごとに Issue を立て、内容を表す名前のブランチで作業し、PR でマージします。

