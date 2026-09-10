import React from "react";

export function ProfileHeader({ profile }) {
  return (
    <header className="profile-header">
      <div className="profile-personal">
        <img
          src={profile.avatar}
          alt={`Retrato de ${profile.username}`}
          className="avatar"
        />
        <div>
          <h1>{profile.username}</h1>
          <p>{profile.bio}</p>
        </div>
      </div>
      <div className="profile-professional">
        <span className="level">Nível {profile.level}</span>
        <strong>{profile.levelLabel}</strong>
        <strong>Foco em {profile.focusOn}</strong>
        <a className="button" href="#contact">
          Contatar
        </a>
      </div>
    </header>
  );
}
