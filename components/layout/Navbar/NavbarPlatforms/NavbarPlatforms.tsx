import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IListPlatformsForNavbar } from "../../../../pages/api/platforms/for-navbar";
import { getStoredPlatform, IPlatform, storePlatform } from "../../../../services/platforms";
import styles from "./NavbarPlatforms.module.scss";

export default function NavbarPlatforms() {
  const [expand, setExpand] = useState(false);
  const [platforms, setPlatforms] = useState<IListPlatformsForNavbar[]>([]);
  const [platform, setPlatform] = useState<IPlatform | undefined>(undefined);

  useEffect(() => {
    if(platform) storePlatform(platform);
  }, [platform]);

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpand(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    getPlatforms();
    setPlatform(getStoredPlatform());
  }, []);

  const setUpRef = (element: HTMLDivElement): void => {
    if (element) ref.current = element;
  };

  const onSelectPlatform = (platform: IListPlatformsForNavbar): void => {
    setPlatform(platform);
    setExpand(false);
  };

  const getPlatforms = (): void => {
    axios.get("/api/platforms/for-navbar").then((res) => {
      setPlatforms(res.data);
    });
  };

  const mainClass = `${styles.platform} ${
    expand ? styles["platform-expanded"] : ""
  }`;

  return (
    <div
      className={mainClass}
      ref={setUpRef}
      onClick={() => setExpand(!expand)}
    >
      <span>{platform?.name}</span>
      <Paper className={styles["platform-select"]}>
        {platforms.map((platform) => (
          <div
            className={styles["platform-item"]}
            key={`nav-plat-${platform.id}`}
            onClick={() => onSelectPlatform(platform)}
          >
            <span>{platform.name}</span>
          </div>
        ))}
      </Paper>
    </div>
  );
}

