package evastudio.payload;

public class User {
    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    private String timestamp;
    private String message;


    @Override
    public String toString() {
        return "Message{" +
                ", timestamp='" + timestamp + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
