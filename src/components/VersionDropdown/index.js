import React from 'react';
import styles from './styles.module.css';

export default function VersionDropdown({ versions, currentVersion }) {
  const handleVersionChange = (event) => {
    const version = event.target.value;
    const currentPath = window.location.pathname;
    
    // Handle paths with existing version numbers
    let newPath = currentPath.replace(/\/v[\d.]+\//, `/v${version}/`);
    
    // If no version was in the path, insert it after /docs/
    if (newPath === currentPath) {
      newPath = currentPath.replace('/docs/', `/docs/v${version}/`);
    }
    
    // If still no change (might be root docs path)
    if (newPath === currentPath) {
      newPath = `/docs/v${version}/`;
    }
    
    window.location.href = newPath;
  };

  return (
    <div className={styles.versionDropdown}>
      <select 
        value={currentVersion} 
        onChange={handleVersionChange}
        className={styles.select}
      >
        {versions.map((version) => (
          <option key={version} value={version}>
            Version {version}
          </option>
        ))}
      </select>
    </div>
  );
}