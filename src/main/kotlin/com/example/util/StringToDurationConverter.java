package com.example.util;

import java.time.Duration;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringToDurationConverter {

    public static Duration convertToDuration(String timeString) {
        // 正则表达式用于匹配小时、分钟和秒
        Pattern pattern = Pattern.compile("(\\d+)小时|(\\d+)分|(\\d+)秒");
        Matcher matcher = pattern.matcher(timeString);

        long hours = 0;
        long minutes = 0;
        long seconds = 0;

        while (matcher.find()) {
            if (matcher.group(1) != null) { // 匹配小时
                hours = Long.parseLong(matcher.group(1));
            } else if (matcher.group(2) != null) { // 匹配分钟
                minutes = Long.parseLong(matcher.group(2));
            } else if (matcher.group(3) != null) { // 匹配秒
                seconds = Long.parseLong(matcher.group(3));
            }
        }

        // 创建Duration对象
        return Duration.ofHours(hours).plusMinutes(minutes).plusSeconds(seconds);
    }

    public static String convertToString(Duration duration) {
        long totalSeconds = duration.getSeconds();

        long hours = totalSeconds / 3600;
        long minutes = (totalSeconds % 3600) / 60;
        long seconds = totalSeconds % 60;

        StringBuilder result = new StringBuilder();
        if (hours > 0) {
            result.append(hours).append("小时");
        }
        if (minutes > 0) {
            result.append(minutes).append("分");
        }
        if (seconds > 0) {
            result.append(seconds).append("秒");
        }

        // 如果结果为空，返回"0秒"
        if (result.isEmpty()) {
            return "0秒";
        }

        return result.toString();
    }
}
