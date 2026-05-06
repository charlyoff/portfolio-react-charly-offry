import React, { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

const fallbackProfile = {
  login: "github-john-doe",
  name: "John Doe",
  html_url: "https://github.com/github-john-doe",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.",
  public_repos: 1,
  followers: 16,
  following: 0,
  location: ""
};

export default function GithubModal({ onClose }) {
  const [profile, setProfile] = useState(fallbackProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    fetch("https://api.github.com/users/octocat")
      .then((response) => (response.ok ? response.json() : fallbackProfile))
      .then((data) => {
        if (!mounted) return;
        setProfile({
          ...fallbackProfile,
          name: "John Doe",
          html_url: data.html_url,
          avatar_url: data.avatar_url,
          bio: fallbackProfile.bio,
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location || ""
        });
      })
      .catch(() => {
        if (mounted) setProfile(fallbackProfile);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="github-title">
      <article className="github-modal">
        <header>
          <h2 id="github-title">Mon profil GitHub</h2>
          <button type="button" aria-label="Fermer" onClick={onClose}>
            <Icon name="x" />
          </button>
        </header>
        <div className="github-content">
          <img src={profile.avatar_url} alt="Avatar GitHub de John Doe" />
          <div className="github-stats" aria-busy={loading}>
            <p><Icon name="user" small /><a href={profile.html_url} target="_blank" rel="noreferrer">{profile.name}</a></p>
            <p><Icon name="pin" small />{profile.location || "\u00a0"}</p>
            <p><Icon name="card" small />{profile.bio}</p>
            <p><Icon name="box" small />Repositories : {profile.public_repos}</p>
            <p><Icon name="users" small />Followers : {profile.followers}</p>
            <p><Icon name="users" small />Following : {profile.following}</p>
          </div>
        </div>
        <footer>
          <button className="btn btn-secondary" type="button" onClick={onClose}>
            Fermer
          </button>
        </footer>
      </article>
    </div>
  );
}
