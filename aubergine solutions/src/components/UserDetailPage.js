import React from 'react';

const UserDetailPage = ({ user }) => {
  const handleDownload = () => {
    const html = document.documentElement.outerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'user_detail.jpeg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="user-detail">
      <img src={user.avatar} alt="Profile" />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default UserDetailPage;
