import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Layout from "@/components/Layout";
import ListStyle from "@/icons/list-style.svg";
import CalendarIcon from "@/icons/calendar.svg";
import PinIcon from "@/icons/pin.svg";
import BookmarkIcon from "@/icons/bookmark.svg";
import styles from "@/styles/SingleMeet.module.css";
import img from "/public/images/background.jpg"; //TODO: get image from backend

const mockData = {
  name: "Mistrzostwa Polski Polskiej Unii Trójboju Siłowego",
  slug: "mistrzostwa-polski-polskiej-unii-trójboju-siłowego",
  federation: "Polska Unia Trójboju Siłowego",
  date: "18-19.03.2023",
  location: "Zalesie (Polska)",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, illo deserunt veritatis aut, consequuntur odit qui tempore minus ullam cupiditate autem explicabo eligendi numquam quibusdam optio sequi deleniti. Atque numquam cupiditate vel dolor animi a vero delectus natus, ea architecto ullam rem error, distinctio non est provident facilis totam quidem eligendi id consectetur consequatur sint! Voluptas asperiores officiis recusandae a aliquid et aspernatur consequatur assumenda animi illo voluptatum tenetur nostrum, at eius quos alias sed, fuga esse minima debitis ducimus rerum totam voluptate. Iste laborum consequatur eum aperiam expedita, sapiente quasi, dolor earum culpa molestiae ipsam? Blanditiis consequuntur obcaecati delectus, excepturi, perferendis modi molestiae pariatur impedit magnam sapiente dolores deleniti accusantium nisi voluptates maiores praesentium, numquam ut. Natus quae corrupti sit animi provident, tempore, hic recusandae consectetur sequi expedita dolore consequatur fugit, doloremque ipsum fuga architecto nisi asperiores est a? A hic officiis exercitationem, nobis temporibus earum atque porro tenetur, praesentium id odio? Laudantium ut quibusdam ratione porro, totam doloremque et nobis. Fugit maxime at itaque iusto, quia, beatae, amet nemo corrupti laudantium magnam commodi. Voluptatibus, iure quasi eos libero mollitia est voluptates iusto, enim numquam perferendis consequatur, fuga dignissimos recusandae repellendus sequi incidunt. Odit quis nisi sit, atque molestias quod quas tempora expedita eveniet commodi officia, ipsa excepturi laborum, nam quos accusantium repudiandae est id! Nisi, similique optio. Aliquam alias quis magnam vero omnis, cumque harum facilis quo amet quibusdam porro iusto dignissimos aliquid aperiam quaerat illum sed, in inventore eum. Id eveniet dignissimos sunt distinctio voluptates soluta expedita. Molestias maiores, minus laboriosam repellendus earum consequuntur repellat quaerat eligendi dignissimos ipsam. Non qui ipsum ipsam nesciunt iusto id soluta repellendus minus tempore, voluptate aliquid consequatur tempora mollitia natus aperiam delectus nemo numquam. A provident inventore dolor aliquid officiis, praesentium amet nostrum cum iusto saepe expedita nemo eligendi porro doloribus laboriosam, dolore totam. Iure quas delectus quibusdam, facilis architecto sed aliquid harum voluptate ullam consectetur possimus debitis, voluptatibus porro iste itaque soluta! Sunt explicabo, tempore assumenda praesentium quidem fugiat culpa quasi eveniet dignissimos possimus dolor excepturi repellendus earum adipisci ab corporis laboriosam maiores obcaecati deleniti optio eos? Tempore iusto accusamus obcaecati maxime? Ipsa atque, modi explicabo nemo, voluptas nostrum maxime iusto, non molestiae exercitationem ipsum numquam! Magnam, doloremque maiores. Ea debitis iure nobis commodi dolore doloremque quos, atque id eligendi provident dicta, ipsam omnis at? Perspiciatis quidem porro rem adipisci corporis, neque, in voluptate modi atque illo obcaecati. Commodi fugiat, ea tenetur aspernatur vero assumenda in beatae rem necessitatibus est labore obcaecati veritatis inventore nisi unde aliquid eum mollitia consectetur earum. Quibusdam quo distinctio officiis ipsum ipsam, possimus perferendis cumque repellat tenetur nostrum enim unde magnam quidem ad consequuntur quisquam ut accusantium quos eligendi. Numquam optio minus magni, unde nostrum molestiae assumenda saepe non veniam laborum iste, odio voluptatum illum vel ratione officiis. Esse incidunt facere in rerum quam blanditiis a architecto obcaecati, doloremque, voluptates dolorum modi omnis iste! Qui, voluptate et, nihil molestiae culpa optio, perferendis corrupti molestias tempore iure saepe perspiciatis! Accusantium beatae, consequatur quia ea itaque quisquam!",
  competitions: [
    "Trójbój, RAW",
    "Wyciskanie leżąc, RAW/EQ",
    "Martwy ciąg, RAW",
    "Przysiad, RAW",
  ],
  saved: false,
};

const SingleMeetPage = () => {
  const {
    name,
    federation,
    date,
    location,
    competitions,
    description,
    slug,
    saved,
  } = mockData;
  const { user } = useAuth();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(saved);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Layout title={`Zawody ${router.query.slug}`}>
      {/* TODO: change title to meet title */}
      <div className={styles.content}>
        <div className={`${styles.container} ${styles.header}`}>
          <Image
            alt='Zdjęcie zawodów trójboju siłowego'
            src='/images/background.jpg'
            width={232}
            height={232}
          />
          <div
            className={styles.topHeader}
            style={{
              backgroundImage: `url(${img.src})`,
            }}
          >
            <button className='btn' onClick={handleSave}>
              <BookmarkIcon /> {isSaved ? "Zapisano" : "Zapisz"}
            </button>

            <div className={styles.title}>{name}</div>
            <div className={styles.subtitle}>{federation}</div>
          </div>
          <ul>
            <li>
              <CalendarIcon />
              {date}
            </li>
            <li>
              <PinIcon />
              {location}
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.container}>
            <h2>Szczegóły</h2>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.container}>
            <h2>Konkurencje i zasady</h2>
            <ul>
              {competitions.map(competition => (
                <li key={competition}>
                  <ListStyle role='presentation' />
                  {competition}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleMeetPage;
