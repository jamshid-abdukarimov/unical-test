import styles from "./style.module.css";

const Loader = ({ main = false }: { main?: boolean }) => {
  return main ? (
    <div className="w-screen fixed h-screen top-0 left-0 bg-[#263038] grid place-items-center z-50">
      <span className={styles.loader}></span>
    </div>
  ) : (
    <span className={styles.loader}></span>
  );
};

export default Loader;
