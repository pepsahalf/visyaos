import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    try {
        let db = await kv.get('visya_db');
        if (!db) {
            // Если база абсолютно пустая (первый запуск), создаем её с нуля
            db = {
                "Maxutko201": { password: "28042010", role: "admin", id: "0001", vk: 0, ar: 0, items: ["GOD MODE"], fines: [], heydogHits: 0, serverLogs: ["[Система] База данных успешно инициализирована!"] },
                "Radon4546": { password: "123", role: "player", id: "6194", vk: 0, ar: 0, items: ["Паспорт"], fines: [], heydogHits: 0 },
                "Steve": { password: "123", role: "player", id: "1005", vk: 0, ar: 0, items: ["Паспорт"], fines: [], heydogHits: 0 }
            };
            await kv.set('visya_db', db);
        }
        res.status(200).json(db);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}