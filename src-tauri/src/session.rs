use tauri::webview::cookie::time::format_description::modifier::UnixTimestamp;

pub struct Session {
    id: u128,
    topic: String,
    start_time: UnixTimestamp,
    total_duration: UnixTimestamp,
}
