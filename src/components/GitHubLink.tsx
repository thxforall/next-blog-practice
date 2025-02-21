import { FaGithub } from 'react-icons/fa';

export default function GitHubLink() {
  return (
    <a
      href="https://github.com/thxforall/cleancode-javascript"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg border border-gray-100"
    >
      <FaGithub className="w-5 h-5" />
      <span>GitHub</span>
    </a>
  );
} 