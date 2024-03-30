export default function Footer() {
  return (
    <footer className="absolute bottom-0 right-0 left-0 text-center">
      <p className="text-black  font-medium text-base md:text-xl py-2">
        {new Date().getFullYear()}{' '}
        <a rel="noopener" href="https://github.com/alphajoop" target="_blank">
          Alpha Diop
        </a>{' '}
        | tous droits réservés
      </p>
    </footer>
  );
}
