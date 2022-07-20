package evastudio.unit.producer;

import evastudio.kafka.KafkaProducer;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.producer.internals.Sender;
import org.jetbrains.annotations.NotNull;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.ContainerProperties;
import org.springframework.kafka.listener.KafkaMessageListenerContainer;
import org.springframework.kafka.listener.MessageListener;
import org.springframework.kafka.test.rule.EmbeddedKafkaRule;
import org.springframework.kafka.test.utils.ContainerTestUtils;
import org.springframework.kafka.test.utils.KafkaTestUtils;
import org.springframework.test.annotation.DirtiesContext;

import java.util.Map;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

//@SpringBootTest
//@DirtiesContext

/*
public class UnitTest {
    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(KafkaProducer.class);
    private static String SENDER_TOPIC = "testTopic";
    private Sender sender;
    private KafkaMessageListenerContainer<String, String> container;
//    private BlockingQueue<ConsumerRecord<String, String>> records;

    public static EmbeddedKafkaRule embeddedKafka = new EmbeddedKafkaRule(1, true, SENDER_TOPIC);

    public UnitTest(Sender sender) {
        this.sender = sender;
    }

    public void setUp() throws Exception {
        // set the topics that need to be consumed

        Map<String, Object> consumerProperties = KafkaTestUtils.consumerProps("sender", "false", embeddedKafka.getEmbeddedKafka());

        DefaultKafkaConsumerFactory<String, String> consumerFactory = new DefaultKafkaConsumerFactory<String, String>(consumerProperties);

        ContainerProperties containerProperties = new ContainerProperties(SENDER_TOPIC);

        KafkaMessageListenerContainer<String, String> container = new KafkaMessageListenerContainer<>(consumerFactory, containerProperties);

        LinkedBlockingQueue<Object> records = new LinkedBlockingQueue<>();

        container
                .setupMessageListener(new MessageListener<String, String>() {
                    @Override
                    public void onMessage(@NotNull ConsumerRecord<String, String> record) {
                        LOGGER.log(Level.parse("Test listener received message."), record.toString());
                        records.add(record);
                    }
                });

//        container.start();

        ContainerTestUtils.waitForAssignment(container, embeddedKafka.getEmbeddedKafka().getPartitionsPerTopic());

        /*
 @After
        public void tearDown () {
            container.stop();
        }
        public void testSend( ) throws Exception {
            sender.send(testMessage);

            ConsumerRecord<String, String> received = (ConsumerRecord<String, String>) records.poll(10, TimeUnit.SECONDS);
            assert(received, hasValue(testMessage));
            assert received.has(key(null));
        }

        container.stop();
    };
*/